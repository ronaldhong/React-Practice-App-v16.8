import React from 'react';
import "./SearchBar.css"

class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            term: ''
        };
    }

    onFormSubmit=(event)=>{
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }



    render(){
        return (
            <div className="ui container search-display">
                <div className="ui segment">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="ui field">
                            <label style={{'margin':'10px'}} >Image Search</label>
                            <input type="text" 
                                   value={this.state.term} 
                                   onChange={e=>{
                                       this.setState({term: e.target.value})
                                    }
                                }
                            />
                        </div>
                    </form>
                </div>
            </div>
            
        )
    };
};

export default SearchBar; 