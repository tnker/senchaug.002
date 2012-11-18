/**
 * @class SenchaUG.controller.Article
 * @extends Ext.app.Controller
 * Description
 */
Ext.define('SenchaUG.controller.Article', {
    extend: 'Ext.app.Controller',
    config: {
        activeIndex: 0,
        
        refs: {
            mainPanel: '#main',
            list: '#main #articleList',
            detail: '#main #articleDetail',
            backButton: '#main #backButton'
        },
        control: {
            list: {
                itemtap: 'showDetail'
            },
             backButton: {
                tap: 'back'
            }
       }
    },
    showDetail: function(view, index, target, record) {
        var me = this,
        detailPanel = me.getDetail();
        detailPanel.setData(record.data);
        me.getBackButton().show();
        me.getMainPanel().setActiveItem(detailPanel);
        me.setActiveIndex(1);
    },
    back: function() {
        var me = this,
        index = me.getActiveIndex() - 1;
        if (index === 0) {
            me.getBackButton().hide();
        }
        me.getMainPanel().animateActiveItem(index, {
            type: 'slide',
            reverse: true
        });
        me.setActiveIndex(index);
        me.getList().deselectAll();
    }
});