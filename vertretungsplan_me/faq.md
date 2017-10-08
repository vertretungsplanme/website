---
layout: default
title: FAQ
permalink: /faq/
order: 5
description: Hier findest du Antworten auf häufig gestellte Fragen zur Vertretungsplan-App.
customjs:
    - /js/schools-count.js
---

FAQ
---

* TOC
{:toc}

### Allgemein

#### Warum gibt es eine kostenpflichtige Version?
Die Arbeit an der App kostet uns viel Zeit und Geld, zum Beispiel für den Server, der die Daten von den
Schulen abruft. Auch ohne den In-App-Kauf ist die App funktionsfähig, man kann allerdings nur eine Klasse/Schule
zur Zeit auswählen und Lehrervertretungspläne sind nicht verfügbar. Genauere Informationen zu den Funktionen der beiden
Versionen gibt es unter [Features](/features). *Bitte prüfe erst, ob deine Schule in der App verfügbar ist, bevor du
die Pro-Version kaufst.*

#### Woher bekomme den Benutzernamen und das Passwort für meine Schule?
Normalerweise sind diese Benutzerdaten die gleichen, mit denen man sich beim Online-Vertretungsplan deiner Schule
einloggt. Wenn du diese nicht kennst, musst du sie bei deiner Schule erfragen.

#### Gibt es die App auch für andere Betriebssysteme?
Im Moment gibt es die App für **Android**-Smartphones und -Tablets und seit Februar 2017 auch für **iOS**-Geräte
(iPhone, iPad und iPod touch).

Eine Umsetzung für weitere Systeme wie Windows 10 (Phone/Tablet/Desktop) oder als Webapp ist möglich, aber noch nicht
fest geplant.

#### Sind meine Daten sicher?
Wir nehmen den Schutz aller Daten, die in der App anfallen, sehr ernst. Genauere Informationen findest du in der
[Datenschutzerklärung](/datenschutz).

#### Ich erhalte von der App keine Benachrichtigungen bei Änderungen des Vertretungsplans. Woran kann das liegen?
Das kann verschiedene Gründe haben. Wenn der in der App angezeigte Vertretungsplan ebenfalls nicht aktuell ist, wurde
vermutlich etwas seitens der Schule geändert. Melden Sie sich dann bitte bei uns (z.B. per E-Mail an 
[info@vertretungsplan.me](mailto:info@vertretungsplan.me)), damit wir das Problem beheben können.
 
Wenn der Vertretungsplan in der App aktuell ist, aber bei Änderungen keine Benachrichtigung erscheint, prüfen Sie bitte zuerst die folgenden Einstellungen:
- Zuerst einmal müssen natürlich in den Einstellungen der App die Benachrichtigungen aktiviert sein.
- Zudem könnte es sein, dass über die Systemeinstellungen die Benachrichtigungen für die App blockiert wurden. Die 
Einstellungen dazu finden Sie in der App „Einstellungen“ und dann unter dem Punkt „Apps“ (Android) oder 
„Mitteilungen“ (iOS).
- Desweiteren gibt es bei vielen Smartphones einen „Nicht Stören“-Modus, der alle Benachrichtigungen deaktiviert. 
Auch diesen können Sie über Einstellung-App abschalten.
- Außerdem könnte es – vorwiegend unter Android – sein, dass eine dritte App dafür sorgt, dass Benachrichtigungen 
blockiert werden. Zum Beispiel wird diese Funktion von manchen Antivirenprogrammen angeboten. Bitte prüfen Sie daher 
auch dort die Einstellungen.

Wenn die obigen Möglichkeiten nicht der Grund sind, kommt noch folgendes infrage:

- Einige Hersteller von Android-Smartphones fügen ihren Geräten Energiesparfunktionen hinzu, die recht aggressiv Apps
 beenden, die im Hintergrund laufen. In manchen Fällen kann dies auch den Empfang von Benachrichtigungen 
 beeinträchtigen, weil dazu die Vertretungsplan-App kurz „aufgeweckt“ werden muss. Deaktivieren Sie also bitte 
 testweise diese Energiesparfunktionen bzw. schließen Sie die Vertretungsplan-App davon aus. Zum Beispiel finden Sie 
 bei Huawei-Smartphones diese Option unter dem Namen „Geschützte Apps“.
- Es könnte auch sein, dass die App sich nicht korrekt bei dem Server angemeldet hat, der die Benachrichtigungen 
verschickt. Über den Knopf „Registrierung senden“ in den Einstellungen der Android-App können Sie eine erneute 
Anmeldung erzwingen, im Zweifel tut es aber auch eine Neuinstallation der App.

Falls alle oben aufgelisteten Lösungsmöglichkeiten das Problem nicht beheben, melden Sie sich bitte bei uns per 
E-Mail.

### Für Schulen

#### Warum ist unsere Schule in der App enthalten, ohne, dass wir das beantragt haben?
Für die Vertretungsplan-App nehmen wir nicht nur Anfragen von Schulen, sondern auch von Schülern und Eltern entgegen,
die gerne den Plan ihrer Schule in der App nutzen würden. Falls Sie als Schulleitung der betreffenden Schule das
nicht wünschen, schreiben Sie mir bitte eine Mail, dann wird die Schule möglichst bald wieder entfernt.

#### Wir würden gerne unsere Schule zur App hinzufügen. Was sind die Voraussetzungen dafür?
Am einfachsten ist es für uns, wenn Sie eines der bereits unterstützten Vertretungsplansysteme verwenden. Diese finden
Sie auf der Seite [Für Schulen](/fuer-schulen)

Die damit erzeugten Vertretungspläne kann die App in den meisten Fällen automatisch einlesen und anzeigen. Die
einzige dafür benötigte Information ist häufig eine Liste aller Klassennamen, die auf dem Vertretungsplan auftauchen
können (also z.B. 05a, 05b, 06a, ...).

Wenn der Vertretungsplan mit einem Passwort geschützt ist, zum Beispiel mit DSB oder iServ oder einer eigenen
Login-Seite auf der Schulwebsite, benötigen wir zum Einbinden des Vertretungsplans in die App gültige Zugangsdaten.
Der Vertretungsplan ist dann in der App ebenfalls passwortgeschützt. Auch wenn jeder Schüler ein eigenes
Benutzerkonto hat, funktioniert das Login in der App damit.

Das WebUntis-System unterstützen wir ebenfalls, allerdings müssen dort Benutzerkonten eingerichtet sein und zum Login in
der App verwendet werden. In WebUntis kann zwar auch ein anonymer Zugriff aktiviert werden, der Hersteller
Gruber&Petters erlaubt es externen Apps jedoch im Moment nicht, diesen Zugang zu nutzen. Bei WebUntis dürfen wir
außerdem mit meinem Server den Plan nur alle 10 Minuten abrufen (bei anderen Systemen geschieht das jede Minute). Daher
kann es passieren, dass die Push-Benachrichtigungen in der App später eintreffen.

Wenn Sie ein anderes System verwenden, können Sie uns gern kontaktieren. Bei Interesse an der
[Schullizenz](/fuer-schulen/#vertretungsplan-pro--schullizenz) ist eventuell auch eine Integration Ihrer
Vertretungsplan-Software möglich.

Wenn Sie Programmierkenntnisse in Java haben, können Sie auch versuchen, selbst einen Parser für Ihren
Vertretungsplan zu programmieren, den wir dann in die der App zugrunde liegende [Open Source-Bibliothek](/open-source/)
einfügen können. Weitere Informationen dazu können wir auch gern per E-Mail bereitstellen.

#### Die App verursacht ein großes Datenaufkommen auf unserem Server. Wie kommt das?
Damit die Schüler bei Änderungen des Vertretungsplans eine Nachricht über die App bekommen, ist es nötig, dass die
Daten kontinuierlich neu abgerufen werden. Damit der Akku des Smartphones geschont wird, läuft das über einen Server,
der etwa jede Minute den Vertretungsplan jeder Schule abruft und bei Änderungen an betroffene Nutzer eine
Push-Nachricht schickt.

#### Dürfen wir in der Schule oder auf unserer Website für die App werben?
Natürlich! Kontaktieren Sie uns bitte per E-Mail, falls Sie dafür Werbematerial o.ä. benötigen.