/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Stoertebeker-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-brewing-trade': '&#xe900;',
		'icon-brewing-specialties': '&#xe901;',
		'icon-brewing-manufactory': '&#xe902;',
		'icon-brewery-old': '&#xe903;',
		'icon-soda-manufactory': '&#xe904;',
		'icon-brewery-market': '&#xe905;',
		'icon-visitor-center': '&#xe906;',
		'icon-brewery-inn': '&#xe907;',
		'icon-tasting': '&#xe908;',
		'icon-tasting-on-board': '&#xe909;',
		'icon-brewery-tour': '&#xe90a;',
		'icon-ships': '&#xe90b;',
		'icon-hops': '&#xe90c;',
		'icon-malt': '&#xe90d;',
		'icon-yeast': '&#xe90e;',
		'icon-culinary-tip': '&#xe90f;',
		'icon-tasting-online': '&#xe910;',
		'icon-master-spice': '&#xe911;',
		'icon-alcohol-content': '&#xe912;',
		'icon-serving-temperature': '&#xe913;',
		'icon-Sommelier-recommendation': '&#xe914;',
		'icon-see': '&#xe915;',
		'icon-smell': '&#xe916;',
		'icon-taste': '&#xe917;',
		'icon-glass-a': '&#xe918;',
		'icon-glass-b': '&#xe919;',
		'icon-glass-c': '&#xe91a;',
		'icon-glass-d': '&#xe91b;',
		'icon-user': '&#xe91c;',
		'icon-glass': '&#xe91d;',
		'icon-cart': '&#xe91e;',
		'icon-globe': '&#xe91f;',
		'icon-arrow-left': '&#xe920;',
		'icon-arrow-right': '&#xe921;',
		'icon-link': '&#xe922;',
		'icon-social-share': '&#xe923;',
		'icon-calendar': '&#xe924;',
		'icon-clock': '&#xe925;',
		'icon-close-overlay': '&#xe926;',
		'icon-facebook': '&#xe927;',
		'icon-twitter': '&#xe928;',
		'icon-instagram': '&#xe929;',
		'icon-xing': '&#xe92a;',
		'icon-linkedIn': '&#xe92b;',
		'icon-snapChat': '&#xe92c;',
		'icon-arrow-up': '&#xe92d;',
		'icon-arrow-down': '&#xe92e;',
		'icon-news': '&#xe92f;',
		'icon-important': '&#xe930;',
		'icon-location-marker__google--passive': '&#xe931;',
		'icon-location-marker__google--active': '&#xe932;',
		'icon-information': '&#xe933;',
		'icon-print': '&#xe934;',
		'icon-location-marker__hotspot--passive': '&#xe935;',
		'icon-location-marker__hotspot--active': '&#xe936;',
		'icon-star-rating--full': '&#xe937;',
		'icon-star-rating--half': '&#xe938;',
		'icon-star-rating--empty': '&#xe939;',
		'icon-bubble__comments': '&#xe93a;',
		'icon-location-marker__flag': '&#xe93b;',
		'icon-gluten-free': '&#xe93c;',
		'icon-vegan': '&#xe93d;',
		'icon-lactose-free': '&#xe93e;',
		'icon-error': '&#xe93f;',
		'icon-slideshow-arrow-left': '&#xe940;',
		'icon-slideshow-arrow-right': '&#xe941;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
