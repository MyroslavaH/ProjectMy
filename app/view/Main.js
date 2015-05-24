/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('C1App.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'C1App.controller.MainController',
        'C1App.model.MainModel'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },
    cls: 'app-main',

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'panel',
            cls: 'main-titlebar',
            html:'TapPanel',
            height:50,
            region: 'north'
        },
        {
            xtype: 'panel',
            region: 'west',
            width: 220,
            cls: 'west-panel',
            items: [

                {
                    xtype: 'menu'
                }
            ]
        },
        {
            xtype: 'panel',
            flex:1,
            layout: 'fit',
            cls: 'main-details-panel',
            items: [
//                {
//                    xtype: 'titlebar'
//
//                }
//                {
//                    xtype: 'invoice-container'
//
//                },
                {
                    flex: 1,
                    xtype: 'new-invoice'
                }

            ]

        }
    ]
});
