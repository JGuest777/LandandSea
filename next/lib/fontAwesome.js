import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import {
	faMobileAlt,
	faEnvelope,
	faPhone
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

// Import @fortawesome/free-solid-svg-icons
library.add(faMobileAlt, faEnvelope, faPhone)
