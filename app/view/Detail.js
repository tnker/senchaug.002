/**
 * @class SenchaUG.view.Detail
 * @extends Ext.Container
 * Description
 */
Ext.define('SenchaUG.view.Detail', {
	
    extend: 'Ext.Container',
    alias: 'widget.articledetail',

		config: {
      cls: 'article-detail',
      itemId: 'articleDetail',
      scrollable: {
        direction: 'vertical'
      },
      tpl: [
        '<div class="detail-div">',
          '<h2>{post_title}</h2>',
          '<div class="value">{post_content}</div>',
        '</div>'
      ]
    }
});