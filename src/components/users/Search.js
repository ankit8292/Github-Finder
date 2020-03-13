import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Search extends Component {
    state={
        text:''
    };

    static propTypes=
    {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired
    };

onSubmit=(e)=>
{
    e.preventDefault();
    if(this.state.text==='')
    {
        this.props.setAlert('Please enter something', 'light')
    }
    else
    {
        this.props.searchUsers(this.state.text);
        this.setState({ text : ''});
    }
   // console.log(this.state.text)
    
};
onChange=(e)=>
{
    this.setState({[e.target.name]:e.target.value})
   // console.log(e.target.value)
};
    render() {
        const {showClear, clearUsers}=this.props;
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange} />
                    <input type='submit' value='Search' className="btn btn-dark btn-block"></input>
                </form>
                {showClear &&( <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>)}
                
            </div>
            
        );
    }
}

export default Search;