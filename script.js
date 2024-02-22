function convertCurrency() {
    const exchangeRates = {
        USD: {
            EUR: 0.85,
            GBP: 0.73,
            INR: 82.99,
            AED: 3.67,
            JPY: 150.32,
            AUD: 1.53,
            NZD: 1.62,
            KWD: 0.31,
            CAD: 1.35,
        },
        EUR: {
            USD: 1.18,
            GBP: 0.86,
            INR: 89.64,
            AED: 3.97,
            JPY: 162.57,
            AUD: 1.65,
            NZD: 1.75,
            KWD: 0.33,
            CAD: 1.46,

        },
        GBP: {
            USD: 1.38,
            EUR: 1.17,
            INR: 104.61,
            AED: 4.63,
            JPY: 189.65,
            AUD: 1.93,
            NZD: 2.05,
            KWD: 0.39,
            CAD: 1.70,
        },
        INR: {
            USD: 0.012,
            EUR: 0.011,
            GBP: 0.0096,
            AED: 0.044,
            JPY: 1.81,
            AUD: 0.018,
            NZD: 0.020,
            KWD: 0.0037,
            CAD: 0.016,
        },
        AED: {
            USD: 0.27,
            EUR: 0.25,
            GBP: 0.22,
            INR: 0.044,
            JPY: 40.92,
            AUD: 0.42,
            NZD: 0.44,
            KWD: 0.084,
            CAD: 0.37,
        },
        JPY: {
            USD: 0.0067,
            EUR: 0.0062,
            GBP: 0.0053,
            INR: 0.55,
            AED: 0.024,
            AUD: 0.010,
            NZD: 0.011,
            KWD: 0.0020,
            CAD: 0.0090
        },
        AUD: {
            USD: 0.65,
            EUR: 0.61,
            GBP: 0.52,
            INR: 54.27,
            AED: 2.40,
            JPY: 98.30,
            NZD: 1.06,
            KWD: 0.20,
            CAD: 0.88,
        },
        NZD: {
            USD: 0.62,
            EUR: 0.57,
            GBP: 0.49,
            INR: 51.20,
            AED: 2.27,
            JPY: 92.70,
            AUD: 0.018,
            KWD: 0.19,
            CAD: 0.83,
        },
        KWD: {
            USD: 3.25,
            EUR: 3.01,
            GBP: 2.57,
            INR: 269.51,
            AED: 11.94,
            JPY: 488.16,
            AUD: 4.97,
            NZD: 5.27,
            CAD: 4.39,
        },
        CAD: {
            USD: 0.74,
            EUR: 0.68,
            GBP: 0.59,
            INR: 61.41,
            AED: 2.72,
            JPY: 111.22,
            AUD: 1.13,
            NZD: 1.20,
            KWD: 0.23,
        },
    };

    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (fromCurrency === toCurrency) {
        document.getElementById("result").innerText = "Please select different currencies.";
        return;
    }

    const exchangeRate = exchangeRates[fromCurrency][toCurrency];
    if (exchangeRate) {
        const convertedAmount = amount * exchangeRate;
        document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2 )} ${toCurrency}`;
    } else {
        document.getElementById("result").innerText = "Exchange rate not available.";
    }
}
