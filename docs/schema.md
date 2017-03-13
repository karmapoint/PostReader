# Database Schema
All tables have id (primary key), creation date, and modify date columns.

## users

| column name        | data type           | details           |
| ------------- |:-------------:|:-------------:|
| name | string | not null |
| email | string | not null, unique, indexed |
| password_digest | string | not null |
| session_token | string | not null |


* **has_many** :collections
* **has_many** :feeds through :collections



## feeds

| column name        | data type           | details           |
| ------------- |:-------------:|:-------------:|
| title | string | not null |
| description | string | not null |
| url | string | not null |
| favicon_url | string | not null |


* **has_many** :articles
* **has_many** :collections through :collection_feeds
* **has_many** :users through :collections


## collections

| column name        | data type           | details           |
| ------------- |:-------------:|:-------------:|
| name | string | not null |
| user_id | integer | not null, indexed |


* **belongs_to** :user
* **has_many** :feeds through :collection_feeds
* **has_many** :articles through :feeds


## articles

| column name        | data type           | details           |
| ------------- |:-------------:|:-------------:|
| title | string | not null |
| author | string | not null |
| postTime | datetime | not null |
| url | string | not null |
| thumbnail | string | not null |
| content | text | not null |
| feed_id | integer | not null, indexed |


* **belongs_to** :feed
* **has_many** :collections through :feed
* **has_many** :users through :collections



## collection_feeds

| column name        | data type           | details           |
| ------------- |:-------------:|:-------------:|
| collection_id | integer | not null, indexed |
| feed_id | integer | not null, indexed |

* ** [:collection_id, :feed_id], unique: true**

* **belongs_to** :feed
* **belongs_to** :collection

## popular
| column name        | data type           | details           |
| ------------- |:-------------:|:-------------:|
| feed_id | integer | not null, indexed |
| popularity | integer | not null, indexed |

* **belongs_to** :feed
