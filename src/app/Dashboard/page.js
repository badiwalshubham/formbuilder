"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation';

import "bootstrap/dist/css/bootstrap.css";

import * as Survey from "survey-core";
import $ from "jquery";

export { MyQuestion } from "../../components/MyQuestion";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";
import "pretty-checkbox/dist/pretty-checkbox.css";

import "select2/dist/js/select2.js";
import "jquery-bar-rating";



// import "icheck/skins/square/blue.css";
// require("icheck");

import * as widgets from "surveyjs-widgets";

window["$"] = window["jQuery"] = $;
require("jquery-ui/ui/widgets/datepicker.js");

widgets.prettycheckbox(Survey);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);
// widgets.icheck(Survey, $);

export default function SurveyJSReactApplication() {
  return (

    <div>
        <Link href="/Creatorpage">Creator</Link>
    </div>

  );
}
