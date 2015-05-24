/**
 * Created by Myroslava on 18.05.2015.
 */

Ext.define('C1App.view.NewInvoice', {
    extend: 'Ext.container.Container',
    requires: [
        'C1App.controller.MainController',
        'C1App.model.MainModel'
    ],
    xtype: 'new-invoice',
    cls: 'new-invoice',
    layout: {
        type: 'vbox'
    },
    flex: 1,


    items:[
        {
            xtype: 'panel',
            flex: 1,
            html: 'New invoice',
            cls: 'new-invoice-panel'
        },
        {
            xtype: 'panel',
            layout: 'hbox',
            flex: 1,
            cls: 'n-i-panel',
            items: [
                {
                    xtype: 'button',
                    html: 'Date',
                    cls: 'new-invoice-button'
                    },
                {
                    xtype: 'button',
                    html: 'Customer',
                    cls: 'new-invoice-button'
                }
            ]
        },
        {
            xtype: 'panel'

        }

    ]







});