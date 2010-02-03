SMarkUp.conf.bbcode = {
	markup: [
		SMarkUp.addons.searchAndReplace,
		{separator: true},
		{
			name: 'bold',
			className: 'strong',
			title: 'Bold',
			open: '[b]',
			key: 'B',
			close: '[/b]'
		},
		{
			name: 'italic',
			className: 'em',
			title: 'Italic',
			open: '[i]',
			close: '[/i]'
		},
		{
			name: 'underline',
			title: 'Underline',
			open: '[u]',
			close: '[/u]'
		},
		{separator: true},
		{
			name: 'img',
			title: 'Image',
			open: '[img]{url}',
			close: '[/img]',
			attributes: [
				{
					type: 'text',
					name: 'url',
					label: 'Image URL'
				}
			]
		},
		{
			name: 'url',
			className: 'a',
			title: 'Link',
			open: '[url={url}]',
			close: '[/url]',
			attributes: [
				{
					type: 'text',
					name: 'url',
					label: 'Link URL'
				}
			]
		},
		{separator: true},
		{
			name: 'fonts',
			className: 'font',
			title: 'Fonts',
			dropDownMenu: [
				{
					name: 'big',
					className: 'font',
					title: 'Big',
					open: '[size=200]',
					close: '[/size]'
				},
				{
					name: 'normal',
					className: 'font',
					title: 'Normal',
					open: '[size=100]',
					close: '[/size]'
				},
				{
					name: 'small',
					className: 'font',
					title: 'Small',
					open: '[size=50]',
					close: '[/size]'
				}
			]
		},
		{separator: true},
		{
			name: 'ul',
			title: 'Unordered List',
			open: '[list]',
			close: '[/list]',
			prepend: "\n",
			append: "\n",
			wrapSelection: "\n   [*]{selection}\n"
		},
		{
			name: 'ol',
			title: 'Ordered List',
			open: '[list={startingnumber}]',
			close: '[/list]',
			prepend: "\n",
			append: "\n",
			wrapSelection: "\n   [*]{selection}\n",
			attributes: [
				{
					type: 'text',
					name: 'startingnumber',
					label: 'Starting Number'
				}
			]
		},
		{
			name: 'li',
			title: 'List Item',
			open: '[*]',
			prepend: "\n   "
		},
		{
			separator: true	
		},
		{
			name: 'quote',
			className: 'blockquote',
			open: '[quote]',
			close: '[/quote]'
		},
		{
			name: 'code',
			open: '[code]',
			close: '[/code]'
		}
	]
};