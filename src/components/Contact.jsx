import React from 'react';
import { Figure, ListGroup, Row } from "react-bootstrap";
import '../styles/contacts.scss';

class Contact extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}
	
	render(){
		const contacts = this.props.contacts.map((contact) => {
			return(
                <div key={contact.id} id="unit">
                    <ListGroup.Item action href={contact.href} className="justify-content-between contact-item">
                        <Figure>
                            <Figure.Image
                                width={130}
                                height={130}
                                src={contact.img_src}
                            />
                            <Figure.Caption className="text">
                                {contact.caption}
                            </Figure.Caption>
                        </Figure>
                    </ListGroup.Item>
                </div>
            );
        });

        return(
            <ListGroup horizontal className="contact-group">
                {contacts}
            </ListGroup>
        );
    }
}

export default Contact;