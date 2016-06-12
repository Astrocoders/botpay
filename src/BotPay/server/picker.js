import { Picker } from 'meteor/meteorhacks:picker';
import bodyParser from 'body-parser';

Picker.middleware(bodyParser.json());
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );
