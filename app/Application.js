/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('C1App.Application', {
    extend: 'Ext.app.Application',
    
    name: 'C1App',

    stores: [
       //'InvoiceGrid'
    ],

    views: [
        'Menu',
        'InvoiceContainer',
        'InvoiceGrid',
        'NewInvoice',
        'TitleBar'
    ],
    models: [
       //'InvoiceGridModel'
    ],
    //controllers:[
    //    'MainController'
    //],
    
    launch: function () {
        // TODO - Launch the application
    }
});
