export {strikes, options, ticker, dte, iv }

let ticker = 'AMD'

let dte = '24'

let iv = '125.2'

let strikes = [
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    115,
    120,
    125,
    130,
    135,
    140,
    145,
    150,
    155
]

let options = [
    {
        "strike_price": 25,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 20,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 30,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 1.2
    },
    {
        "strike_price": 35,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 40,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 45,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 50,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 55,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 56,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 57,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 58,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 59,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 60,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 61,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 62,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 63,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 64,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 65,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 66,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 67,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 68,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 69,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 70,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 71,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 72,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 73,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 74,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 75,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 76,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 77,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 78,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 79,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 80,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 81,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 82,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 83,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 84,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 85,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 86,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 87,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 88,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 89,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 90,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 91,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 92,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 93,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 94,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 95,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 96,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 97,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 98,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 99,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 100,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 101,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 102,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 103,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 104,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 105,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 106,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 107,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 108,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 109,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 110,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 111,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 115,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 120,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 125,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 130,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 135,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 140,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 145,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 150,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 155,
        "contract_type": "call",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 25,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 30,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 35,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 40,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 45,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 50,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 55,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 56,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 57,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 58,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 59,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 60,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 61,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 62,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 63,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 64,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 65,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 66,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 67,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 68,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 69,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 70,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 71,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 72,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 73,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 74,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 75,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 76,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 77,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 78,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 79,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 80,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 81,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 82,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 83,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 84,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 85,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 86,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 87,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 88,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 89,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 90,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 91,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 92,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 93,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 94,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 95,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 96,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 97,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 98,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 99,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 100,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 101,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 102,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 103,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 104,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 105,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 106,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 107,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 108,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 109,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 110,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 111,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 115,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 120,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 125,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 130,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 135,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 140,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 145,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 150,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    },
    {
        "strike_price": 155,
        "contract_type": "put",
        "bid": 1.3,
        "mid": 1.4,
        "ask": 1.5,
        "spread": 0.2
    }
]
