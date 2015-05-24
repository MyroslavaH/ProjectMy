/**
 * Created by Myroslava on 10.05.2015.
 */
Ext.define('C1App.model.InvoiceGridModel', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'numberOfInvoice', type: 'int'},
        { name: 'invoiceDate', type: 'Date'},
        { name: 'customerName', type: 'string'},
        { name: 'sum', type: 'int'},
        { name: 'comments', type: 'string'}

    ]
});