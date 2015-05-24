
Ext.define('C1App.view.InvoiceGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.RowNumberer'
        //'C1App.store.InvoiceGrid'
    ],
    xtype: 'invoice-grid',
    itemId: 'invoice-grid',
    cls: 'invoice-grid',
    //store: 'invoice-grid-store',
    data:[],
    columnLines: true,
    height: 600,
    width: 1145,

    defaults: {
        flex: 1
    },
    //dockedItems: [{
    //    xtype: 'toolbar',
    //    dock: 'bottom',
    //    items: [{
    //        xtype: 'textfield',
    //        itemId:'total-amount',
    //        fieldLabel: '�������� ����',
    //        editable:false
    //    }]
    //}],

    initComponent: function () {
        this.totalAmount = 0;
        this.columns = [

            {
                xtype: 'rownumberer',
                cls: 'nn-invoice-type'

            },
            {
                text     : 'Number',
                cls: "num-invoice-style",
                sortable : true,
                dataIndex: 'numberOfInvoice'
            }, {
                text     : 'Date',
//                lockable: false,
                cls:'date-invoice-style',
                sortable : true,
                dataIndex: 'invoiceDate'
            }, {
                text     : 'Customer',
//            hidden   : true,
                cls:'customer-invoice-style',
                sortable : true,
                dataIndex: 'customerName'
            }, {
                text     : 'Sum',
                cls: 'sum-invoice-style',
//                hidden:true,
                sortable : true,
                dataIndex: 'sum'
            },
            {
                text     : 'Comments',
                cls: 'comments-invoice-style',
//                sortable : true,
                dataIndex: 'comments'
            }
//            {
//                text     : 'ֳ��',
//                width    : 80,
//                sortable : true,
//                renderer: function(val){
//                    return val + ' ���'
//                },
//                dataIndex: 'price'
//            },
//            {
//                text     : '����',
//                width    : 80,
//                renderer : function(price, el, record) {
//                    var counter = record.data.counter;
//                    var val = price*counter;
//                    return val;
//                },
//                dataIndex: 'price'
//            },
//            {
//                text     : '�������',
//                width    : 80,
////                sortable : true,
//                renderer : function(val) {
//                    var record = Ext.getStore('shops').findRecord('shopId', val);
//                    if(record){
//                        val = record.data.address
//                    }else{
//                        val = "-"
//                    }
//                    return val;
//                },
//                dataIndex: 'shopId'
//            },
//            {
//                text     : '���� �������',
//                width    : 80,
////                sortable : true,
//                renderer : function(val) {
//                    var date = val.getDate();
//                    var month = val.getMonth()+1;
//                    var year = val.getFullYear();
//                    return date+ "/"+month+ "/"+ year;
//                },
//                dataIndex: 'incomeDate'
//            },
//            {
//                text     : '���� �������',
//                width    : 80,
////                sortable : true,
//                renderer : function(val) {
//                    if(val){
//                        var date = val.getDate();
//                        var month = val.getMonth()+1;
//                        var year = val.getFullYear();
//                        return date+ "/"+month+ "/"+ year;
//                    } else{
//                        return '-'
//                    }
//
//                },
//                dataIndex: 'saleDate'
//            }
        ];


        //this.store = Ext.getStore('FlowersDB.store.Balance');
        this.callParent();
        //this.down('#total-amount').setValue(this.totalAmount);
    },
    viewConfig: {
        stripeRows: true
    }

});/**
 * Created by Myroslava on 10.05.2015.
 */
