/**
 * @class SenchaUG.view.List
 * @extends Ext.dataview.List
 * Description
 */
Ext.define('SenchaUG.view.List', {
	extend: 'Ext.List',
	alias: 'widget.articlelist',
	config: {
		itemId: 'articleList',
		store: 'Articles',
		cls: 'article-list',
		itemTpl: [
			'<div class="article-div">',
				'<h1>{post_title:ellipsis(28)}</h1>',
				'<div class="value">{post_content:ellipsis(100)}</div>',
			'</div>'
		]
	}

});