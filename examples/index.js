/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var Complex64 = require( '@stdlib/complex-float32-ctor' );
var isSameValueZerof = require( './../lib' );

var z1 = new Complex64( 5.0, 3.0 );
var z2 = new Complex64( 5.0, 3.0 );
console.log( isSameValueZerof( z1, z2 ) );
// => true

z1 = new Complex64( -5.0, -3.0 );
z2 = new Complex64( 5.0, 3.0 );
console.log( isSameValueZerof( z1, z2 ) );
// => false

z1 = new Complex64( NaN, 3.0 );
z2 = new Complex64( NaN, 3.0 );
console.log( isSameValueZerof( z1, z2 ) );
// => true
