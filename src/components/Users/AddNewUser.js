import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddNewUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal'


const AddNewUser = (props) => {

    const [ eneteredUserName, setEnteredUserName ] = useState('');

  

    const changeUserNamehandler = (event) =>{
        setEnteredUserName(event.target.value)
    }

    const [ eneteredUserAge, setEnteredUserAge ] = useState('');

    const changeUserAgehandler = (event) =>{
        setEnteredUserAge(event.target.value)
    }

    const [ error , setError ] = useState()

    const addUserHandler  = (event) =>{
        event.preventDefault();

        if(eneteredUserName.trim().length === 0 || eneteredUserAge.trim().length === 0 ){
            setError({
                title:'Invalid Input',
                message: 'Please Enter a valid Name and Age (non-empty) value.'
            })
            return;
        }
        if(+eneteredUserAge < 1){
            setError({
                title:'Invalid Age',
                message: 'Please Enter a valid Age (> 0).'
            })
            return;
        }
        props.onAddUser(eneteredUserName,eneteredUserAge);
        setEnteredUserName('');
        setEnteredUserAge('')
    }

    const errorHandler = () =>{
        setError(null)
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>

                    <label htmlFor="userName">Username</label>
                    <input id="userName" type="text" value={eneteredUserName} onChange={changeUserNamehandler}/>

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={eneteredUserAge} onChange={changeUserAgehandler}/>   

                    <Button type="submit">Add User</Button>

                </form>
            </Card>
        </div>

    )
}
export default AddNewUser;
