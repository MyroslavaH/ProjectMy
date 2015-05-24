/**
 * Created by Myroslava on 21.05.2015.
 */
Ext.define('C1App.view.TitleBar', {
    extend: 'Ext.container.Container',
    requires: [
        'C1App.controller.MainController',
        'C1App.model.MainModel'
    ],
    xtype: 'titlebar',

    cls: 'titlebar',
    layout: {
        type: 'hbox'
    },
    region: 'north',
     xtype: 'tabpanel',
            items:[
                {
                    title: '1tab',
                    closable: true,
                    cls: 'tabpanel-button'
                },
                {
                    title: '2tab',
                    closable: true,
                    cls: 'tabpanel-button'
                }
            ]



});
