/**
 * Created by Myroslava on 10.05.2015.
 */
Ext.define('C1App.store.InvoiceGrid', {
    extend: 'Ext.data.Store',
    model: 'C1App.model.InvoiceGridModel',
    autoLoad: false,
    storeId: 'invoice-grid-store',
    sorters: [{
        property: 'numberOfInvoice',
        direction: 'ASC'
    }]
})