/*****************************************************************************
●プラグイン基本情報
名称 => "scrollEffect", 
説明 => <<<DESCRIPTION
スクロールし要素が表示されたタイミングでアニメーションのCSSを付与するプラグイン
要素に対してプラグインの付与の際の引数で設定可能
要素に対してdata属性を付与する事で要素毎の設定も可能
DESCRIPTION;

●data属性一覧
data-scroll-effect-animation-name => 				"アニメーション名称", 
data-scroll-effect-animation-duration => 			"アニメーション実行時間", 
data-scroll-effect-animation-iteration-count => 	"アニメーション実行回数", 
data-scroll-effect-animation-fill-mode => 			"アニメーション実行完了後の状態", 
data-scroll-effect-animation-delay => 				"アニメーションを遅らせる時間" 
*****************************************************************************/

(function($){
	const 
	defaults = {
		elementTarget:'.scroll_effect', 		//対象の要素
		defaultAnimationName:'', 				//アニメーション名称
		defaultAnimationDuration:'1s', 			//アニメーション実行時間
		defaultAnimationIterationCount:'1', 	//アニメーション実行回数
		defaultAnimationFillMode:'forwards', 	//アニメーション実行完了後の状態
		defaultAnimationDelay:'0' 				//アニメーションを遅らせる時間
	};
	$.fn.scrollEffect = function(options){
		let 
		el = this, 
		lenEl = el.length;
		if(lenEl === 0)
		return this;
		if(lenEl > 1){
			el.each(function(){
				$(this).scrollEffect(options);
			});
			return this;
		}
		let 
		configs = {}, 
		posEl = false, 
		indexEl, 
		//初期実行用関数
		funcInit = () => {
			funcPutVar();
			funcInitCss();
			funcAddEventListener();
			funcDestructor0();
		}, 
		//初期編集代入用関数
		funcPutVar = () => {
			configs = $.extend(
				{}, 
				defaults, 
				options 
			);
			indexEl = $(configs.elementTarget).index(el);
		}, 
		//CSS初期化
		funcInitCss = () => {
			const 
			dataAnimationDuration = el.attr('data-scroll-effect-animation-duration'), 
			dataAnimationIterationCount = el.attr('data-scroll-effect-animation-iteration-count'), 
			dataAnimationFillMode = el.attr('data-scroll-effect-animation-fill-mode'), 
			dataAnimationDelay = el.attr('data-scroll-effect-animation-delay');
			el.css({
				'-webkit-animation-name':'none', 
				'animation-name':'none', 
				'animation-duration':typeof dataAnimationDuration === 'string'?dataAnimationDuration:configs.defaultAnimationDuration, 
				'animation-iteration-count':typeof dataAnimationIterationCount === 'string'?dataAnimationIterationCount:configs.defaultAnimationIterationCount, 
				'animation-fill-mode':typeof dataAnimationFillMode === 'string'?dataAnimationFillMode:configs.defaultAnimationFillMode, 
				'animation-delay':typeof dataAnimationDelay === 'string'?dataAnimationDelay:configs.defaultAnimationDelay 
			});
		}, 
		//イベントリスナー追加用関数
		funcAddEventListener = () => {
			const 
			win = $(window), 
			//アニメーションのCSSプロパティ付与用関数
			funcPutCssAnimate = () => {
				const 
				dataAnimationName = el.attr('data-scroll-effect-animation-name');
				el.css({
					'-webkit-animation-name':typeof dataAnimationName === 'string'?dataAnimationName:configs.defaultAnimationName, 
					'animation-name':typeof dataAnimationName === 'string'?dataAnimationName:configs.defaultAnimationName 
				});
			}, 
			//スクロール量と要素の位置確認用関数
			funcConfirmScroll = () => {
				const 
				scrollTop = win.scrollTop(), 
				winHeight = win.height(), 
				elHeight = el.outerHeight(), 
				posEl = el.offset().top;
				if(
					posEl < scrollTop + winHeight && 
					posEl + elHeight > scrollTop 
				){
					funcPutCssAnimate();
					funcRemoveEventListener(indexEl);
				}
			};
			if(el.css('visibility') === 'hidden')
			el.on(
				'animationstart', 
				() => {
					el
					.css({
						'visibility':'visible' 
					});
				} 
			);
			win.on(
				'load.scrollEffect' + indexEl + ' scroll.scrollEffect' + indexEl, 
				funcConfirmScroll 
			);
		}, 
		//アニメーション実行後イベントリスナー削除用関数
		funcRemoveEventListener = (indexEl) => {
			const 
			win = $(window);
			win.off('load.scrollEffect' + indexEl + ' scroll.scrollEffect' + indexEl);
		}, 
		//初期変数メモリー開放用関数
		funcDestructor0 = () => {
			lenEl = 
			funcInit = 
			funcPutVar = 
			funcInitCss = 
			funcAddEventListener = 
			funcDestructor0 = void 0;
		}, 
		//アニメーション実行後メモリー開放用関数
		funcDestructor1 = () => {
			funcRemoveEventListener = 
			funcDestructor1 = void 0;
		};
		funcInit();
		return this;
	};
})(jQuery);