/**
 * Index module for URANIO Core
 *
 * @packageDocumentation
 */

import urn_core from 'urn_core';

const bll = urn_core.bll.create_basic('superuser');

bll.find({}).then((d) => console.log(d));
