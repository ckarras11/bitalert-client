# BitAlert

## Overview
BitAlert was created to help users keep an eye on the current market price.  With the massive increase of intrest in cryptocurrencies there has been an increase in volatility.  Changing in value thousands of dollars at a time.  It is difficult to watch the price and know when to buy or sell.  That where Bitalert comes in.  The app allows you to set alerts for the day and be notified via SMS the minute the market price becomes lower than your alert price.  Users also have the ability to remove unwanted alerts.  The server side code is located in this [repo.](https://github.com/ckarras11/bitalert-server) and the direct link for the app is [here!](https://bitalert.netlify.com/)

## Cron Job
There are 5 cron jobs that run constantly.  
1. Get the current market price from BitStamp and push it to the database (every minute)
2. Clear the price collection in the database at midnight
3. Flag alerts that are over 24 hours old to be marked for deletion (every minute)
4. Compares alerts with the current market price, alerts that are triggered are sent an sms message and are then marked for deletion (every minute)
5. Remove alerts that are flagged for deletion at midnight

## Landing Page
Bit alert is a single page app.  When the page initially loads a loading wheel appears.  When the data for the current market price is fetch the loading wheel disappears and the chart is displayed.

![image](https://user-images.githubusercontent.com/30561347/34362282-2c9342c6-ea40-11e7-8ea3-03c806a011fb.png)

## Create Alert

## Edit Alert


## Technologies Used
### Client Side
* React
* Redux
* JSX
* JavaScript
* CSS
### Server Side
* Node.js
* Express
* Cron Job
* Twilio
* Mongoose
* MongoDB

## Responsive Design
This page was made responsive using ``flexbox`` and ``@media querys``

![image]()
