import { nanoid } from "@reduxjs/toolkit";
import { addUsers } from "../../redux/users/usersSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddUserPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            id: nanoid(),
            name: e.target.elements.name.value,
            age: e.target.elements.age.value
        }

        dispatch(addUsers(newUser));
        navigate('/');
    }


    return (
        <form onSubmit={handleSubmit}>
            <label> Name:
                <input type="text" name="name"/>
            </label>
            <label> Age:
                <input type="number" name="age"/>
            </label>
            <button type="submit">Save</button>
        </form>
    )
};

export default AddUserPage;
