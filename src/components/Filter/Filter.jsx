import s from './Filter.module.css';

const Filter = ({ onChangeProp }) => {
    
    return (
        <form className={s.Form}>
            <label htmlFor="">
                Find contacts by name<br />
                <input type="text"
                onChange={evt => {
                    onChangeProp(evt.target.value)
                }}/>
            </label>
        </form>
    );

};

export default Filter;