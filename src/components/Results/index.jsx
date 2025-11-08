import { calculateInvestmentResults } from "../../util/investment";

const Results = ({ enteredValues }) => {
    const computedValues = calculateInvestmentResults(enteredValues);
    const inputIsValid = enteredValues.initialInvestment > 0 && enteredValues.annualInvestment >= 0 && enteredValues.investmentReturn > 0 && enteredValues.duration > 0;

    if (!inputIsValid) {
        return <p id="no-data">Enter a valid data</p>;
    }           
    return (

        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Investment</th>
                    <th>Interest Earned</th>
                    <th>Total Value</th>
                </tr>
            </thead>
            <tbody>
                {computedValues.map((data) => (
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{data.annualInvestment * data.year + enteredValues.initialInvestment}</td>
                        <td>{data.interest.toFixed(2)}</td>
                        <td>{data.valueEndOfYear.toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
};

export default Results;