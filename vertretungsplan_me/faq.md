---
layout: default
title: FAQ
permalink: /faq/
order: 3
---

FAQ
---

* TOC
{:toc}

### Allgemein

#### Wer hat diese App programmiert und warum?
Mein Name ist Johan v. Forstner und ich bin Physikstudent. Die erste Version der App habe ich als Schüler der
Lornsenschule Schleswig für den Vertretungsplan eben dieser Schule programmiert. Da ich bemerkt habe, dass viele
andere Schulen einen sehr ähnlichen Vertretungsplan benutzen, habe ich nun eine universelle App für mehrere Schulen
erstellt.

#### Warum ist die App kostenlos?
Langfristig muss ich Einnahmen mit der App machen, allein schon, um den Server, auf dem sie läuft, zu
finanzieren, und natürlich, damit sich die Zeit, die ich darin investiert habe, lohnt. Daher wird es bald eine
kostenpflichtige Version der App mit zusätzlichen Features geben.

#### Woher bekomme den Benutzernamen und das Passwort für meine Schule?
Normalerweise sind diese Benutzerdaten die gleichen, mit denen man sich beim Online-Vertretungsplan deiner Schule
einloggt. Wenn du diese nicht kennst, musst du sie bei deiner Schule erfragen.

#### Sind meine Daten sicher?
Ich nehme den Schutz aller Daten, die in der App anfallen, sehr ernst. Genauere Informationen findest du in der
[Datenschutzerklärung](/datenschutz).

### Für Schulen

#### Warum ist unsere Schule in der App enthalten, ohne, dass wir das beantragt haben?
Für die Vertretungsplan-App nehme ich nicht nur Anfragen von Schulen, sondern auch von Schülern und Eltern entgegen,
die gerne den Plan ihrer Schule in der App nutzen würden. Falls Sie als Schulleitung der betreffenden Schule das
nicht wünschen, schreiben Sie mir bite eine Mail, dann wird die Schule möglichst bald wieder entfernt.

#### Wir würden gerne unsere Schule zur App hinzufügen. Was sind die Voraussetzungen dafür?
Am einfachsten ist es für mich, wenn Sie eines der bereits unterstützten Vertretungsplansysteme verwenden. Bisher
sind dies die folgenden:

  - HTML-Exporte aus Stundenplanungs-Software
     - Untis
        - Info-Stundenplan
        - Monitor-Stundenplan
        - einfache Vertretungsplan-Modul
     - svPlan
     - DaVinci
     - Turbo-Vertretung
     - [LegionBoard](https://legionboard.github.io/) (direkt via API angebunden)
     - Indiware (XML-Export)
  - Spezielle Systeme für Online-Vertretungspläne
    - eSchool Web
    - Digitales Schwarzes Brett (nur mit einem der oben genannten HTML-Exporte)
        - DSBmobile
        - DSBlight
    - iServ (nur mit einem der oben genannten HTML-Exporte)
  - Sonstige Formate
    - CSV (genauere Spezifikation auf Anfrage)

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

Wenn Sie ein anderes System verwenden, können Sie mich gern kontaktieren. Da die App ein freiwilliges Projekt ist,
kann ich jedoch nicht garantieren, dass ich Ihre Schule einbinden kann

Wenn Sie Programmierkenntnisse in Java haben, können Sie auch versuchen, selbst einen Parser für Ihren
Vertretungsplan zu programmieren, den ich dann in die der App zugrunde liegende [Open Source-Bibliothek](/open-source/)
einfügen kann. Weitere Informationen dazu kann ich auch gern per E-Mail bereitstellen.

#### Die App verursacht ein großes Datenaufkommen auf unserem Server. Wie kommt das?
Damit die Schüler bei Änderungen des Vertretungsplans eine Nachricht über die App bekommen, ist es nötig, dass die
Daten kontinuierlich neu abgerufen werden. Damit der Akku des Smartphones geschont wird, läuft das über einen Server,
der etwa jede Minute den Vertretungsplan jeder Schule abruft und bei Änderungen an betroffene Nutzer eine
Push-Nachricht schickt.

#### Dürfen wir in der Schule oder auf unserer Website für die App werben?
Natürlich! Ich habe dafür ein Plakat vorbereitet, das Sie unter [Download](/download) herunterladen können.