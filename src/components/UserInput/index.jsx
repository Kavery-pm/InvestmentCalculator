const UserInput = () => {
    return (
        <section id='user-input'>
            <form>
                <div className="input-group">
                    <p>


                        <label htmlFor="investment-amount">Initial Investment:</label>
                        <input type="number" id="investment-amount" name="investment-amount" />
                    </p>
                    <p>
                        <label htmlFor="annual-investment">Annual Investment:</label>
                        <input type="number" id="annual-investment" name="investment-amount" />
                    </p>
                </div>

                <div className="input-group">
                    <p>
                        <label htmlFor="return">Expected Return:</label>
                        <input type="number" id="return" name="return" />
                    </p>
                    <p>
                        <label htmlFor="duration">Duration</label>
                        <input type="number" id="duration" name="duration" />
                    </p>

                </div>
            </form>
        </section>
    );
}
export default UserInput;