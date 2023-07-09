
const FormRowSelect = ({id, value, labelText, name, handleChange, options}) => {
    return <div className="form-row">
        <label htmlFor={id} className="form-label">{labelText || name}</label>
        <select id={id}
                className={'form-select'}
                name={name}
                value={value}
                onChange={handleChange}
        >
            {
                options.map((opt, index) => {
                    return <option key={index} value={opt}>{opt}</option>
                })
            }
        </select>
    </div>
};

export default FormRowSelect;