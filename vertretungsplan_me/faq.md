---
layout: default
title: FAQ
permalink: /faq/
order: 3
description: Hier findest du Antworten auf häufig gestellte Fragen zur Vertretungsplan-App.
customjs:
    - /js/schools-count.js
---

FAQ
---

* TOC
{:toc}

### Allgemein

#### Wer hat diese App programmiert und warum?
Mein Name ist Johan v. Forstner und ich bin Physikstudent. Die erste Version der App habe ich als Schüler der
Lornsenschule Schleswig für den Vertretungsplan eben dieser Schule programmiert. Da ich bemerkt habe, dass viele
andere Schulen einen sehr ähnlichen Vertretungsplan benutzen, habe ich nun eine universelle App erstellt, die inzwischen
<span class="schools-count">...</span> Schulen unterstützt.

#### Warum gibt es eine kostenpflichtige Version?
Die Arbeit an der App kostet mich viel Zeit und auch ein wenig Geld, zum Beispiel für den Server, der die Daten von den
Schulen abruft. Auch ohne den In-App-Kauf ist die App funktionsfähig, man kann allerdings nur eine Klasse/Schule
zur Zeit auswählen und Lehrervertretungspläne sind nicht verfügbar. Genauere Informationen zu den Funktionen der beiden
Versionen gibt es unter [Features](/features). *Bitte prüfe erst, ob deine Schule in der App verfügbar ist, bevor du
die Pro-Version kaufst.*

#### Woher bekomme den Benutzernamen und das Passwort für meine Schule?
Normalerweise sind diese Benutzerdaten die gleichen, mit denen man sich beim Online-Vertretungsplan deiner Schule
einloggt. Wenn du diese nicht kennst, musst du sie bei deiner Schule erfragen.

#### Gibt es die App auch für andere Betriebssysteme?
Im Moment gibt es die App leider nur für **Android**-Smartphones und -Tablets. Eine Version für **iOS** (iPhone, iPad
und iPod touch) ist geplant und erscheint voraussichtlich im Laufe von 2017. Abhängig von der Nachfrage werde ich nach
Erscheinen der iOS-Version entscheiden, ob sich auch eine Umsetzung für weitere Systeme wie Windows 10 (Smartphone,
Tablet und Desktop) oder als Webapp lohnt.

Bis zum Erscheinen der jeweiligen Versionen kann ich leider nur auf die Webseiten der Schulen und die zum Teil
vorhandenen schuleigenen Apps verweisen. 

#### Sind meine Daten sicher?
Ich nehme den Schutz aller Daten, die in der App anfallen, sehr ernst. Genauere Informationen findest du in der
[Datenschutzerklärung](/datenschutz).

### Für Schulen

#### Warum ist unsere Schule in der App enthalten, ohne, dass wir das beantragt haben?
Für die Vertretungsplan-App nehme ich nicht nur Anfragen von Schulen, sondern auch von Schülern und Eltern entgegen,
die gerne den Plan ihrer Schule in der App nutzen würden. Falls Sie als Schulleitung der betreffenden Schule das
nicht wünschen, schreiben Sie mir bitte eine Mail, dann wird die Schule möglichst bald wieder entfernt.

#### Wir würden gerne unsere Schule zur App hinzufügen. Was sind die Voraussetzungen dafür?
Am einfachsten ist es für mich, wenn Sie eines der bereits unterstützten Vertretungsplansysteme verwenden. Diese finden
Sie auf der Seite [Für Schulen](/fuer-schulen)

Die damit erzeugten Vertretungspläne kann die App in den meisten Fällen automatisch einlesen und anzeigen. Die
einzige dafür benötigte Information ist häufig eine Liste aller Klassennamen, die auf dem Vertretungsplan auftauchen
können (also z.B. 05a, 05b, 06a, ...).

Wenn der Vertretungsplan mit einem Passwort geschützt ist, zum Beispiel mit DSB oder iServ oder einer eigenen
Login-Seite auf der Schulwebsite, benötige ich zum Einbinden des Vertretungsplans in die App gültige Zugangsdaten.
Der Vertretungsplan ist dann in der App ebenfalls passwortgeschützt. Auch wenn jeder Schüler ein eigenes
Benutzerkonto hat, funktioniert das Login in der App damit.

Das WebUntis-System werde ich vorerst nicht unterstützen, denn dafür gibt es bereits eine offizielle App und auch
einige inoffizielle Projekte. Außerdem wäre die Implementierung von WebUntis für meine App relativ schwierig, da der
Hersteller von WebUntis explizit verbietet, den Vertretungsplan dort häufig abzufragen, was für die zeitnahen
Push-Benachrichtigungen, die meine App bietet, nötig ist.

Wenn Sie ein anderes System verwenden, können Sie mich gern kontaktieren. Bei Interesse an der
[Schullizenz](/fuer-schulen/#vertretungsplan-pro--schullizenz) ist eventuell auch eine Integration Ihrer
Vertretungsplan-Software möglich.

Wenn Sie Programmierkenntnisse in Java haben, können Sie auch versuchen, selbst einen Parser für Ihren
Vertretungsplan zu programmieren, den ich dann in die der App zugrunde liegende [Open Source-Bibliothek](/open-source/)
einfügen kann. Weitere Informationen dazu kann ich auch gern per E-Mail bereitstellen.

#### Die App verursacht ein großes Datenaufkommen auf unserem Server. Wie kommt das?
Damit die Schüler bei Änderungen des Vertretungsplans eine Nachricht über die App bekommen, ist es nötig, dass die
Daten kontinuierlich neu abgerufen werden. Damit der Akku des Smartphones geschont wird, läuft das über einen Server,
der etwa jede Minute den Vertretungsplan jeder Schule abruft und bei Änderungen an betroffene Nutzer eine
Push-Nachricht schickt.

#### Dürfen wir in der Schule oder auf unserer Website für die App werben?
Natürlich! Kontaktieren Sie mich bitte per E-Mail, falls Sie dafür Werbematerial o.ä. benötigen.