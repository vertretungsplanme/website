---
layout: default
title: Download
permalink: /download/
order: 2
---

Download
--------

Hier kannst du die Vertretungsplan-App für dein Android-Smartphone oder -Tablet über den Google Play Store
herunterladen. {% if site.windows_phone_url %} Außerdem gibt es eine rudimentäre Version für Windows Phone. {% endif %}

<a class="btn btn-primary btn-embossed" href="https://play.google.com/store/apps/details?id={{ site.android_packagename }}">
    <img src="{{ '/img/google_play.svg' | prepend: site.baseurl }}"/>
</a>

{% if site.windows_phone_url %}
<a class="btn btn-primary btn-embossed" href="{{ site.windows_phone_url }}">
    Windows Phone
    <!--<img src="{{ '/img/google_play.svg' | prepend: site.baseurl }}"/>-->
</a>
{% endif %}

<a class="btn btn-primary btn-embossed" href="#">Plakat für Schulen</a>