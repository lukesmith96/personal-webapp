import React from 'react';
import '../styles/get_tennis.scss';
import { useTable } from 'react-table';
import 'react-bootstrap'
import axios from 'axios';

export function GetTennis(props) {
    let columns_temp = [];
    const [data, setData] = React.useState({
        "data": [],
        "columns": [],
        "legend_columns": []
    });
    let id = props.match.params.id;

    // Using useEffect to call the API once mounted and set the data getGroupContent(result.data.body.grouplist)
    React.useEffect(() => {
        let columns_temp = [
            {
                Header: "Week",
                accessor: "week"
            },
            {
                Header: " ",
                columns: []
            },
            {
                Header: "Off",
                accessor: "discard",
            }
        ];
        let temp_legend_columns = [
            {
                Header: "Number",
                accessor: "number"
            },
            {
                Header: "Player",
                accessor: "player"
            }
        ];
        (async () => { 
            await axios.get("https://ohuq0ojxz2.execute-api.us-west-2.amazonaws.com/prod/tennis?id=" + id)
                .then(result => {
                    console.log(result.data.body)
                    result.data.body.group_list.map((item) => {
                        console.log("Ith loop: " + item);
                        columns_temp = columns_temp.map(header =>
                            header.Header === " " ? {
                                ...header,
                                columns: [
                                    ...header.columns,
                                    {
                                        Header: "Group " + item,
                                        accessor: "group" + item
                                    }
                                ]
                            }
                            : header
                        );
                    });
                    console.log(columns_temp);
                    setData({"data": result.data.body, "columns": columns_temp, "legend_columns": temp_legend_columns});
                })
                .catch(error => console.log("Error: " + error));
         })();
    }, []);

    return (
        <div className="container view">
            <h1 className="intro">{data.data.title}</h1>
            <h3 className="tennis_title">Schedule: </h3>
            <div className="data_table">
                {console.log(data.columns)}
                <CustomTable columns={data.columns} data={data.data.schedule} />
            </div>
            <h3 className="tennis_title">Legend:</h3>
            <div className="legend_table">
                <CustomTable columns={data.legend_columns} data={data.data.player_list} />
            </div>
        </div>
    );
}

function CustomTable({ columns, data }) {
    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps, // table props from react-table
        getTableBodyProps, // table body props from react-table
        headerGroups, // headerGroups, if your table has groupings
        rows, // rows for the table based on the data passed
        prepareRow // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable({
        columns,
        data
    });

    /* 
        Render the UI for your table
        - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
    */
    return (
        <table className="bordered hover" {...getTableProps()}>
        <thead>
            {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                ))}
            </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
            prepareRow(row);
            return (
                <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
                </tr>
            );
            })}
        </tbody>
        </table>
    );
}