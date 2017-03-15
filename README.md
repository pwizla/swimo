# Swimo
Swimo, a portmanteau word for *Swiss* and *money*.       
Swimo is like a Swiss friend helping you manage your money.

_Based on the principles of [envelope budgeting](https://www.thebalance.com/what-is-envelope-budgeting-1293682)_   
_Design inspired by my Swiss roots_ 🇨🇭

![screenshot as of 2017-03-13](https://github.com/pwizla/swimo/blob/master/screenshot-2017_03_13.jpg)

# Reached release 0.2

Second minor release, still in the MVP phase.

For now, you can:

* Add new transactions
* See the full list of transactions
* Get real-time updated total amounts for account balance and budget envelopes
* See budget envelopes, as well as engaged and remaining amounts for each envelope
* Modify the amount allowed to each budget envelope

**NEW in v0.2 :**

This release focuses on various improvements to the budget table:

* **Envelopes are now editable**: click on any amount in the "Envelope" column, edit the amount, and press Enter or click outside of the cell to save it. The table is automatically updated and saved!

* **Totals** are computed and displayed at the bottom of table.

* **Introducing 'Conditional Formatting'**:   
Some lines are automatically highlighted to draw your attention on certain alert levels: 

    - when your expenses reach 90% or more of the envelope budget, the line is highlighted with a light orange tone

    ![screen shot 2017-03-15 at 18 44 38](https://cloud.githubusercontent.com/assets/4233866/23962844/b72ad876-09af-11e7-98e9-1dabadcf6e36.jpg)

   - when you're over budget, the line turns to a white on red scheme

    ![screen shot 2017-03-15 at 18 43 49](https://cloud.githubusercontent.com/assets/4233866/23962851/be459d3a-09af-11e7-80d3-d0da9e553ef4.jpg)

**Please Note: About budget categories**   
The number of budget categories and their name is not editable in the UI yet. These data are hardcoded in the `src/lib/settings.jsx` file. Feel free to modify it to your own convenience there, by using the same JSON-based format. Be sure to modify both the `budget`and `categories` JSON objects accordingly.


