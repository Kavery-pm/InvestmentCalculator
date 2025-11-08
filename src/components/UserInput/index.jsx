

const UserInput = ({ changeInput, enteredValues }) => {

    const handleChange = (identifier, value) => {
        changeInput(identifier, +value);
    }

    return (
        <section id='user-input'>
            <form>
                <div className="input-group">
                    <p>


                        <label htmlFor="investment-amount">Initial Investment:</label>
                        <input type="number" id="investment-amount" name="investment-amount" onChange={(e) => { handleChange('initialInvestment', e.target.value) }} value={enteredValues.initialInvestment} />
                    </p>
                    <p>
                        <label htmlFor="annual-investment">Annual Investment:</label>
                        <input type="number" id="annual-investment" name="investment-amount" value={enteredValues.annualInvestment} onChange={(e) => { handleChange('annualInvestment', e.target.value) }} />
                    </p>
                </div>

                <div className="input-group">
                    <p>
                        <label htmlFor="return">Expected Return:</label>
                        <input type="number" id="return" name="return" value={enteredValues.investmentReturn} onChange={(e) => { handleChange('investmentReturn', e.target.value) }} />
                    </p>
                    <p>
                        <label htmlFor="duration">Duration</label>
                        <input type="number" id="duration" name="duration" value={enteredValues.duration} onChange={(e) => { handleChange('duration', e.target.value) }} />
                    </p>

                </div>
            </form>
        </section>
    );
}
export default UserInput;