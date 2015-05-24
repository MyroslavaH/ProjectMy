/**
 * Created by Myroslava on 10.05.2015.
 */
Ext.define('C1App.view.InvoiceContainer', {
    extend: 'Ext.container.Container',
    requires: [
        'C1App.controller.MainController',
        'C1App.model.MainModel'
    ],

    xtype: 'invoice-container',

    cls: 'invoice-container',

    layout: {
        type: 'vbox'
    },
    items: [
        {
            xtype: 'panel',
            layout: 'hbox',
            items: [
                {
                    xtype: 'button',
                    text: 'New',
                    cls: "btn-invoice"
                },
                {
                    xtype: 'button',
                    text: 'Sort',
                    cls: "btn-invoice"

                },
                {
                    xtype: 'button',
                    text: 'search',
                    cls: "btn-invoice"
                }
            ]
        },
        {
            xtype: 'invoice-grid'
        }
    ]

});