

const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
    return (
        <div className={"exchange-rate"}>
            <h3>Exchange Rate</h3><p>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</p>
            <h1>{exchangeRate}</h1>

        </div>
    )
}

export default ExchangeRate;
