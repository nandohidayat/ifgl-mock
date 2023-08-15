const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
const reason = (amount) => {
    switch (amount) {
        case 10001:
            return 'PROCESSOR_TIMEOUT'
        case 10002:
            return 'CONSUMER_AUTHENTICATION_FAILED'
        case 10003:
            return 'AVS_FAILED'
        case 10004:
            return 'CONTACT_PROCESSOR'
        case 10005:
            return 'PROCESSOR_DECLINED'
        case 10006:
            return 'UNAUTHORIZED_CARD'
        case 10007:
            return 'DECLINED_CHECK'
        case 10008:
            return 'BLACKLISTED_CUSTOMER'
        case 10009:
            return 'SUSPENDED_ACCOUNT'
        case 10010:
            return 'INVALID_ACCOUNT'
        case 10011:
            return 'GENERAL_DECLINE'
        case 10012:
            return 'BOLETO_DECLINED'
        case 10013:
            return 'SCORE_EXCEEDS_THRESHOLD'
        case 10014:
            return 'PAYMENT_REFUSED'
        case 10015:
            return 'PROCESSOR_ERROR'
        case 10016:
            return 'EXPIRED_CARD'
        case 10017:
            return 'INVALID_MERCHANT_CONFIGURATION'
        case 10018:
            return 'CONSUMER_AUTHENTICATION_REQUIRED'
        case 10019:
            return 'DECISION_PROFILE_REVIEW'
        case 10020:
            return 'DECISION_PROFILE_REJECT'
        case 10021:
            return 'CUSTOMER_WATCHLIST_MATCH'
        case 10022:
            return 'ADDRESS_COUNTRY_WATCHLIST_MATCH'
        case 10023:
            return 'EMAIL_COUNTRY_WATCHLIST_MATCH'
        case 10024:
            return 'IP_COUNTRY_WATCHLIST_MATCH'
        case 10025:
            return 'ACH_VERIFICATION_FAILED'
        case 10026:
            return 'ALLOWABLE_PIN_RETRIES_EXCEEDED'
        case 10027:
            return 'PENDING_AUTHENTICATION'
        case 10028:
            return 'INSUFFICIENT_FUND'
        case 10029:
            return 'CVN_NOT_MATCH'
        case 10030:
            return 'INVALID_CVN'
        case 10031:
            return 'CV_FAILED'
        case 10032:
            return 'EXCEEDS_CREDIT_LIMIT'
        case 10033:
            return 'DEBIT_CARD_USAGE_LIMIT_EXCEEDED'
        case 10034:
            return 'ISSUER_UNAVAILABLE'
        case 10035:
            return 'STOLEN_LOST_CARD'
        case 20001:
            return 'DUPLICATE_REQUEST'
        case 20002:
            return 'SYSTEM_ERROR'
        case 20003:
            return 'SERVER_TIMEOUT'
        case 20004:
            return 'SERVICE_TIMEOUT'
        case 20005:
            return 'MISSING_FIELD'
        case 20006:
            return 'INVALID_DATA'
        case 20007:
            return 'CARD_TYPE_NOT_ACCEPTED'
        case 20008:
            return 'INVALID_MERCHANT_CONFIGURATION'
        case 20009:
            return 'INVALID_AMOUNT'
        case 20010:
            return 'INVALID_CARD_TYPE'
        case 20011:
            return 'INVALID_PAYMENT_ID'
        case 20012:
            return 'INVALID_CARD'
        case 20013:
            return 'INVALID_OR_MISSING_CONFIG'
        case 20014:
            return 'NOT_SUPPORTED'
        case 20015:
            return 'PROCESSOR_UNAVAILABLE'
        default:
            return 'UNKNOWN'
    }
}

const field = (amount) => {
    if (amount <= 20000) {
        return {errorInformation: {reason: reason(amount)}}
    } else {
        return {reason: reason(amount)}
    }
}

app.post('/pts/v2/payments', (req, res) => {
    return res.status(200).json(field(req.body.orderInformation.amountDetails.totalAmount))
})

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
