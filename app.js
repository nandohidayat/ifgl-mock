const express = require("express");
const app = express();
const port = process.env.PORT || 31;

app.use(express.json())
const reason = (amount) => {
    switch (amount) {
        case 101:
            return 'PROCESSOR_TIMEOUT'
        case 102:
            return 'CONSUMER_AUTHENTICATION_FAILED'
        case 103:
            return 'AVS_FAILED'
        case 104:
            return 'CONTACT_PROCESSOR'
        case 105:
            return 'PROCESSOR_DECLINED'
        case 106:
            return 'UNAUTHORIZED_CARD'
        case 107:
            return 'DECLINED_CHECK'
        case 108:
            return 'BLACKLISTED_CUSTOMER'
        case 109:
            return 'SUSPENDED_ACCOUNT'
        case 110:
            return 'INVALID_ACCOUNT'
        case 111:
            return 'GENERAL_DECLINE'
        case 112:
            return 'BOLETO_DECLINED'
        case 113:
            return 'SCORE_EXCEEDS_THRESHOLD'
        case 114:
            return 'PAYMENT_REFUSED'
        case 115:
            return 'PROCESSOR_ERROR'
        case 116:
            return 'EXPIRED_CARD'
        case 117:
            return 'INVALID_MERCHANT_CONFIGURATION'
        case 118:
            return 'CONSUMER_AUTHENTICATION_REQUIRED'
        case 119:
            return 'DECISION_PROFILE_REVIEW'
        case 120:
            return 'DECISION_PROFILE_REJECT'
        case 121:
            return 'CUSTOMER_WATCHLIST_MATCH'
        case 122:
            return 'ADDRESS_COUNTRY_WATCHLIST_MATCH'
        case 123:
            return 'EMAIL_COUNTRY_WATCHLIST_MATCH'
        case 124:
            return 'IP_COUNTRY_WATCHLIST_MATCH'
        case 125:
            return 'ACH_VERIFICATION_FAILED'
        case 126:
            return 'ALLOWABLE_PIN_RETRIES_EXCEEDED'
        case 127:
            return 'PENDING_AUTHENTICATION'
        case 128:
            return 'INSUFFICIENT_FUND'
        case 129:
            return 'CVN_NOT_MATCH'
        case 130:
            return 'INVALID_CVN'
        case 131:
            return 'CV_FAILED'
        case 132:
            return 'EXCEEDS_CREDIT_LIMIT'
        case 133:
            return 'DEBIT_CARD_USAGE_LIMIT_EXCEEDED'
        case 134:
            return 'ISSUER_UNAVAILABLE'
        case 135:
            return 'STOLEN_LOST_CARD'
        case 201:
            return 'DUPLICATE_REQUEST'
        case 202:
            return 'SYSTEM_ERROR'
        case 203:
            return 'SERVER_TIMEOUT'
        case 204:
            return 'SERVICE_TIMEOUT'
        case 205:
            return 'MISSING_FIELD'
        case 206:
            return 'INVALID_DATA'
        case 207:
            return 'CARD_TYPE_NOT_ACCEPTED'
        case 208:
            return 'INVALID_MERCHANT_CONFIGURATION'
        case 209:
            return 'INVALID_AMOUNT'
        case 210:
            return 'INVALID_CARD_TYPE'
        case 211:
            return 'INVALID_PAYMENT_ID'
        case 212:
            return 'INVALID_CARD'
        case 213:
            return 'INVALID_OR_MISSING_CONFIG'
        case 214:
            return 'NOT_SUPPORTED'
        case 215:
            return 'PROCESSOR_UNAVAILABLE'
        default:
            return 'UNKNOWN'
    }
}

const field = (amount) => {
    if (amount <= 200) {
        return {errorInformation: {reason: reason(amount)}}
    } else {
        return {reason: reason(amount)}
    }
}

app.post('/pts/v2/payments', (req, res) => {
    return res.status(2).json(field(req.body.orderInformation.amountDetails.totalAmount))
})

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 10;
server.headersTimeout = 120 * 10;
