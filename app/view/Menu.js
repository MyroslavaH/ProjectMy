/**
 * Created by Myroslava on 10.05.2015.
 */
Ext.define('C1App.view.Menu', {
        extend: 'Ext.container.Container',
        requires: [
            'C1App.controller.MainController',
            'C1App.model.MainModel'
        ],

        xtype: 'menu',
        //controller: 'main',
        //   viewModel: {
        //       type: 'main'
        //   },
        cls: 'menu',
        layout: {
            type: 'vbox'
        },
        width: 220,
        height: 700,
        items:[
            {
                xtype: 'button',
                text:'Sale',
                itemId: 'sale-btn',
                cls: 'button-style'

            },
            {
                xtype: 'panel',
                hidden: true,
                layout: 'vbox',
                itemId: 'sale-panel-child',
                items:[
                    {
                        xtype: 'button',
                        text: 'Invoice',
                        itemId: 'invoice-btn',
                        cls: 'button-style open'
                    }, {
                        xtype: 'button',
                        text: 'fff',
                        cls: 'button-style open'
                    }, {
                        xtype: 'button',
                        text: 'fdfd',
                        cls: 'button-style open'
                    }
                ]

            },

            {
                xtype: 'button',
                text: 'Buy',
                itemId: 'buy-btn',
                cls: 'button-style'
            },
            {
                xtype: 'panel',
                hidden: true,
                layout: 'vbox',
                itemId: 'buy-panel-child',
                items:[
                    {
                        xtype: 'button',
                        text: 'invoice',
//                        itemId: 'invoice-btn',
                        cls: 'button-style open'
                    }, {
                        xtype: 'button',
                        text: 'fff',
                        cls: 'button-style open'
                    }, {
                        xtype: 'button',
                        text: 'fdfd',
                        cls: 'button-style open'
                    }
                ]

            },
            {
                xtype: 'button',
                text:'Warehouse',
                //itemId: 'sale-btn',
                cls: 'button-style sale'
            },
            {
                xtype: 'panel',
                hidden: true,
                layout: 'vbox',
                //itemId: 'sale-panel-child',
                items:[
                    {
                        xtype: 'button',
                        text: 'nghnhg',
//                        itemId: 'consignment-btn',
                        cls: 'button-style open'
                    }, {
                        xtype: 'button',
                        text: 'fff',
                        cls: 'button-style open'
                    }, {
                        xtype: 'button',
                        text: 'fdfd',
                        cls: 'button-style open'
                    }
                ]

            },
            {
                xtype: 'button',
                text:'Paydesk',
                //itemId: 'sale-btn',
                cls: 'button-style sale'
            },
            {
                xtype: 'panel',
                hidden: true,
                layout: 'vbox',
//                itemId: 'sale-panel-child',
                items:[
                    {
                        xtype: 'button',
                        text: 'nghnhg',
//                        itemId: 'consignment-btn',
                        cls: 'button-style open'
                    }, {
                        xtype: 'button',
                        text: 'fff',
                        cls: 'button-style open'
                    }, {
                        xtype: 'button',
                        text: 'fdfd',
                        cls: 'button-style open'
                    }
                ]

            },
            {
                xtype: 'button',
                text:'Customers',
                //itemId: 'sale-btn',
                cls: 'button-style sale'
            },
            {
                xtype: 'panel',
                hidden: true,
                layout: 'vbox',
//                itemId: 'sale-panel-child',
                items:[
                    {
                        xtype: 'button',
                        text: 'nghnhg',
//                        itemId: 'consignment-btn',
                        cls: 'button-style open'
                    }, {
                        xtype: 'button',
                        text: 'fff',
                        cls: 'button-style open'
                    }, {
                        xtype: 'button',
                        text: 'fdfd',
                        cls: 'button-style open'
                    }
                ]

            },
            {
                xtype: 'button',
                text:'Reports',
                //itemId: 'sale-btn',
                cls: 'button-style sale'
            },
            {
                xtype: 'panel',
                hidden: true,
                layout: 'vbox',
//                itemId: 'sale-panel-child',
                items:[
                    {
                        xtype: 'button',
                        text: 'nghnhg',
//                        itemId: 'consignment-btn',
                        cls: 'button-style open'
                    }, {
                        xtype: 'button',
                        text: 'fff',
                        cls: 'button-style open'
                    }, {
                        xtype: 'button',
                        text: 'fdfd',
                        cls: 'button-style open'
                    }
                ]

            }

        ],
        initComponent: function () {
            var me = this;
            me.callParent();
            me.down('#sale-btn').on('click', this.onSaleButtonClick, this);
        },
        onSaleButtonClick: function() {
            var hidden = this.down('#sale-panel-child').hidden;
            this.down('#sale-panel-child').setVisible(hidden);
        }
,
        openComponent: function () {
            var me = this;
            me.callParent();
            me.down('#buy-btn').on('click', this.onBuyButtonClick, this);
        },
        onBuyButtonClick: function() {
            var hidden = this.down('#buy-panel-child').hidden;
            this.down('#buy-panel-child').setVisible(hidden);
        }


    }
);