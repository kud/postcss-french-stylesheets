var postcss = require('postcss');

module.exports = postcss.plugin('postcss-spanish-stylesheets', function (opts) {
    opts = opts || {};

    return function (css) {
        css.walkDecls(function transformDecl(decl) {
            // Properties
            decl.prop = decl.prop.replace('fond', 'background');
            decl.prop = decl.prop.replace('bordure', 'border');
            decl.prop = decl.prop.replace('bordure-inférieure', 'border-bottom');
            decl.prop = decl.prop.replace('bordure-supérieure', 'border-top');
            decl.prop = decl.prop.replace('bordure-gauche', 'border-left');
            decl.prop = decl.prop.replace('bordure-droite', 'border-right');
            decl.prop = decl.prop.replace('contenu', 'content');
            decl.prop = decl.prop.replace('curseur', 'cursor');
            decl.prop = decl.prop.replace('filtre', 'filter');
            decl.prop = decl.prop.replace('flotteur', 'float');
            decl.prop = decl.prop.replace('typographie', 'font-family');
            decl.prop = decl.prop.replace('largeur', 'width');
            decl.prop = decl.prop.replace('hauteur', 'height');
            decl.prop = decl.prop.replace('arrondi', 'border-radius');
            decl.prop = decl.prop.replace('interligne', 'line-height');
            decl.prop = decl.prop.replace('espacement', 'letter-spacing');
            decl.prop = decl.prop.replace('marge', 'margin');
            decl.prop = decl.prop.replace('marge-supérieure', 'margin-top');
            decl.prop = decl.prop.replace('marge-inférieure', 'margin-bottom');
            decl.prop = decl.prop.replace('marge-gauche', 'margin-left');
            decl.prop = decl.prop.replace('marge-droite', 'margin-right');
            decl.prop = decl.prop.replace('largeur-maximale', 'max-width');
            decl.prop = decl.prop.replace('largeur-minimale', 'min-width');
            decl.prop = decl.prop.replace('hauteur-maximale', 'max-height');
            decl.prop = decl.prop.replace('hauteur-minimale', 'min-height');
            decl.prop = decl.prop.replace('débordement', 'overflow');
            decl.prop = decl.prop.replace('position', 'position');
            decl.prop = decl.prop.replace('tableau', 'table');
            decl.prop = decl.prop.replace('couche', 'z-index');
            decl.prop = decl.prop.replace('visibilité', 'visibility');
            decl.prop = decl.prop.replace('animation', 'animation');
            decl.prop = decl.prop.replace('animation-délai', 'animation-delay');
            decl.prop = decl.prop.replace('animation-direction', 'animation-direction');
            decl.prop = decl.prop.replace('animation-durée', 'animation-duration');
            decl.prop = decl.prop.replace('ombre-boîte', 'box-shadow');
            decl.prop = decl.prop.replace('ombre-texte', 'text-shadow');
            decl.prop = decl.prop.replace('style-liste', 'list-style');
            decl.prop = decl.prop.replace('transparence', 'opacity');
            decl.prop = decl.prop.replace('transition', 'transition');
            decl.prop = decl.prop.replace('transition-durée', 'transition-duration');
            decl.prop = decl.prop.replace('transition-propriété', 'transition-property');
            decl.prop = decl.prop.replace('indentation', 'text-indent');

            // Position Values and Properties
            decl.value = decl.value.replace('gauche', 'left');
            decl.prop = decl.prop.replace('gauche', 'left');
            decl.value = decl.value.replace('droite', 'right');
            decl.prop = decl.prop.replace('droite', 'right');
            decl.value = decl.value.replace('haut', 'top');
            decl.prop = decl.prop.replace('haut', 'top');
            decl.value = decl.value.replace('bas', 'bottom');
            decl.prop = decl.prop.replace('bas', 'bottom');

            // Values
            decl.value = decl.value.replace('souligné', 'underline');
            decl.value = decl.value.replace('pointeur', 'pointer');
            decl.value = decl.value.replace('majuscule', 'uppercase');
            decl.value = decl.value.replace('centre', 'center');
            decl.value = decl.value.replace('milieu', 'middle');
            decl.value = decl.value.replace('aucun', 'none');
            decl.value = decl.value.replace('hérédité', 'inherit');
            decl.value = decl.value.replace('répété', 'repeat');
            decl.value = decl.value.replace('gras', 'bold');
            decl.value = decl.value.replace('transparent', 'transparent');
            decl.value = decl.value.replace('fixé', 'fixed');
            decl.value = decl.value.replace('absolut', 'absolute');
            decl.value = decl.value.replace('relatif', 'relative');
            decl.value = decl.value.replace('collé', 'collapse');
            decl.value = decl.value.replace('caché', 'hidden');

            if (decl.value.indexOf('!important') >= 0) {
                decl.value = decl.value.replace(/\s*!important\s*/, '');
                decl.important = true;
            }
        });
    };
});
