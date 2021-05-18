export const SchemaDefinition =  {
    'orders': [
        {
            "title": "Orders number",
            "value": "id"
        },
        {
            "title": "Users Id",
            "value": "customer"
        },
        {
            "title": "Date",
            "value": "orderedDate"
        },
        {
            "title": "Status",
            "value": "status"
        },
        {
            "title": "Total",
            "value": "price"
        }
    ],
    'shipments': [
        {
            "title": "id",
            "value": "id"
        },
        {
            "title": "order",
            "value": "order"
        },
        {
            "title": "recipient",
            "value": "recipient"
        },
        {
            "title": "recipientPhone",
            "value": "recipientPhone"
        },
        {
            "title": "shippingAddress",
            "value": "shippingAddress"
        },
        {
            "title": "shipDate",
            "value": "shipDate"
        }
    ],
    'employees': [
        {
            "title": "id",
            "value": "id"
        },
        {
            "title": "firstName",
            "value": "firstName"
        },
        {
            "title": "lastName",
            "value": "lastName"
        },
        {
            "title": "phone",
            "value": "phone"
        },
        {
            "title": "email",
            "value": "email"
        }
    ],
    'payments': [
        {
            "title": "id",
            "value": "id"
        },
        {
            "title": "order",
            "value": "order"
        },
        {
            "title": "method",
            "value": "method"
        },
        {
            "title": "paidDate",
            "value": "paidDate"
        },
        {
            "title": "billingAddress",
            "value": "billingAddress"
        }
    ]
}
