/************************************************************************
 *
 *                      EVOLUTION COMPONENTS
 *
 ***********************************************************************/

import documentReady from './evolution/document-ready'
import crumble from './evolution/crumble'
import dotNavigation from './evolution/dot_navigation'
import fadeLinesOnScroll from './evolution/fade_lines_on_scroll'
import bookmarklet from './evolution/bookmarklet'
import demoComponent from './evolution/demo-component'
import readabilityPanel from './evolution/readability_improvement_panel'
import herald from './evolution/herald'
import paragraphGallery from './evolution/paragraph-gallery'
import popover from './evolution/pop_over'
import ikonize from './evolution/ikon'
import layer_2d from './evolution/layer_2d'
import singleInputForm from './evolution/single_input_form'
import layerAnimations from './evolution/layer-animations'
import layerDragAndDrop from './evolution/layer-drag-and-drop'
import spaceSavingMinimalistForm from './evolution/space_saving_minimalist_form'
import curtain from './evolution/curtain'
import text2speech from './evolution/text2speech'
import svg_pagination from './evolution/svg_pagination'
import divTable from './evolution/div_table'
import searchWithLongEdit from './evolution/search_with_long_edit'
import minimalistCarouselTwo from './evolution/minimalist_carousel_two'
import inputScanner from './evolution/input_scanner'
import carouselDrop from './evolution/carousel_with_dropping_circle_nav'
import safety from './evolution/safety'
import dotValidator from './evolution/dotValidator'
import sift from './evolution/sift'
import fullscreen_gallery from './evolution/fullscreen_gallery'


/************************************************************************
 *
 *                      STANDARD COMPONENTS
 *
 ***********************************************************************/

import accordion from './standard/accordion'
import cssAnimations from './standard/css_animations'
import codeMarkup from './standard/code_markup'
import stdForms from './standard/forms'
import stdCarousel from './standard/carousel'
import stdTabs from './standard/tabs'
import sticky from './standard/sticky'
import modals from './standard/modals'
import audioPlayer from './standard/audio_player'


/************************************************************************
 *
 *                      COMPONENT INITIALIZATION
 *
 ***********************************************************************/



documentReady(
  crumble,
  dotNavigation,
  fadeLinesOnScroll,
  bookmarklet,
  cssAnimations,
  codeMarkup,
  stdForms,
  accordion,
  demoComponent,
  readabilityPanel,
  stdCarousel,
  sticky,
  herald,
  scrollManagement,
  paragraphGallery,
  popover,
  ikonize,
  inputScanner,
  modals,
  layer_2d,
  singleInputForm,
  layerAnimations,
  layerDragAndDrop,
  stdTabs,
  curtain,
  text2speech,
  svg_pagination,
  divTable,
  searchWithLongEdit,
  minimalistCarouselTwo,
  carouselDrop,
  safety,
  sift,
  fullscreen_gallery
)

singleInputForm();
spaceSavingMinimalistForm();
audioPlayer();
searchWithLongEdit();