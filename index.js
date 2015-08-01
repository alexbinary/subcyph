/**
 * subcyph.js - outil pour aider au déchiffrement de texte chiffrés par substitution.
 *
 * Programme interactif, lancer puis suivre les instructions.
 *
 * @author Alexandre Bintz
 * jul. 2015
 */

"use strict" ;

var processUserInput = undefined ;

process.stdin.setEncoding ( 'utf8' ) ;
process.stdin.on ( 'readable' , function () {
  var d = process.stdin.read () ;
  if ( d != null ) {
    if ( typeof processUserInput == 'function' ) {
      processUserInput ( d ) ;
    }
  }
} ) ;

function getFreq ( s ) {

  var f1 = [] ;
  for ( var i in s ) {
    if ( chars.indexOf ( s[i] ) != -1 ) {
      f1[s[i]] = typeof f1[s[i]] == 'number' ? f1[s[i]]+1 : 1 ;
    }
  }
  var f2 = [] ;
  for ( var i in f1 ) {
    if ( ! Array.isArray ( f2[f1[i]] ) ) {
      f2[f1[i]] = [] ;
    }
    f2[f1[i]].push ( i ) ;
  }
  f2.reverse();
  var f3 = '' ;
  for ( var i in f2 ) {
    for ( var j in f2[i] ) {
      f3 += f2[i][j] ;
    }
  }
  return f3 ;
}

function getSubstitutions ( f1 , f2 ) {

  var s = [] ;
  for ( var i in f1 ) {
    if ( f2[i] ) {
      s [f2[i]] = f1[i] ;
    }
  }
  return s ;
}

function applySubstitutions ( cypher , s ) {

  var clear = [] ;
  for ( var i = 0 , l = cypher.length ; i < l ; i ++ ) {
    if ( chars.indexOf ( cypher[i] ) !== -1 ) {
      clear.push( '_' ) ;
    } else {
      clear.push( cypher[i] ) ;
    }
  }
  for ( var l in s ) {
    var i = -1 ;
    while ( ( i = cypher.indexOf ( l , i+1 ) ) !== -1 ) {
      if ( s[l] ) {
        clear[i] = s[l] ;
      }
    }
  }
  clear = clear.join( '' ) ;
  return clear ;
}


var chars = 'abcdefghijklmnopqrstuvwxyz' ;
var lang_freq = 'esaitnrulodcpmvqfbghjxyzwk' ;

var manual_s = [] ;


process.stdout.write ( '\nEntrer le texte chiffré sans accents (les espaces et signes de ponctuations sont autorisés) : ') ;
process.stdout.write ( '\n> ') ;

processUserInput = function ( s ) {

  var cypher = s.trim ().toLowerCase () ;

  process.stdout.write ( '\n-- RESOLUTION AUTOMATIQUE --') ;
  process.stdout.write ( '\n') ;

  var cypher_freq = getFreq ( cypher ) ;

  process.stdout.write ( '\npar fréquence décroissante dans le texte chiffré    : ' + cypher_freq ) ;
  process.stdout.write ( '\npar fréquence décroissante dans la langue française : ' + lang_freq ) ;

  var s = getSubstitutions ( lang_freq , cypher_freq ) ;
  var clear = applySubstitutions ( cypher , s ) ;

  process.stdout.write ( '\n') ;
  process.stdout.write ( '\nRésultat de la substitution : ') ;

  process.stdout.write ( '\n') ;
  process.stdout.write ( '\nchiffré : ' + cypher ) ;
  process.stdout.write ( '\nclair   : ' + clear ) ;

  process.stdout.write ( '\n') ;
  process.stdout.write ( '\n-- RESOLUTION MANUELLE --') ;
  process.stdout.write ( '\n') ;

  process.stdout.write ( '\nEntrer une substitution (entrer \'ab\' pour remplacer a par b, entrer \'a\' pour effacer la substitution enregistrée pour a) : ') ;
  process.stdout.write ( '\n> ') ;

  processUserInput = function ( s ) {

    s = s.trim();

    manual_s [ s[0] ] = s[1] ;
    var clear = applySubstitutions ( cypher , manual_s ) ;

    process.stdout.write ( '\n' + cypher ) ;
    process.stdout.write ( '\n' + clear ) ;

    process.stdout.write ( '\n' ) ;
    process.stdout.write ( '\npar fréquence décroissante dans le texte chiffré    : ' + cypher_freq ) ;
    process.stdout.write ( '\npar fréquence décroissante dans la langue française : ' + lang_freq ) ;
    process.stdout.write ( '\n' ) ;
    process.stdout.write ( '\nEntrer une substitution (entrer \'ab\' pour remplacer a par b, entrer \'a\' pour effacer la substitution enregistrée pour a) : ') ;
    process.stdout.write ( '\n> ') ;

  } ;

} ;
