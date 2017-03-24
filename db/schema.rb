# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170324175901) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "articles", force: :cascade do |t|
    t.string   "title",      null: false
    t.string   "author"
    t.date     "date"
    t.string   "url",        null: false
    t.string   "image_url"
    t.string   "summary"
    t.text     "content",    null: false
    t.integer  "feed_id",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["feed_id"], name: "index_articles_on_feed_id", using: :btree
    t.index ["user_id", "url"], name: "index_articles_on_user_id_and_url", unique: true, using: :btree
    t.index ["user_id"], name: "index_articles_on_user_id", using: :btree
  end

  create_table "collected_feeds", force: :cascade do |t|
    t.integer  "collection_id", null: false
    t.integer  "feed_id",       null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["collection_id", "feed_id"], name: "index_collected_feeds_on_collection_id_and_feed_id", unique: true, using: :btree
    t.index ["collection_id"], name: "index_collected_feeds_on_collection_id", using: :btree
    t.index ["feed_id"], name: "index_collected_feeds_on_feed_id", using: :btree
  end

  create_table "collections", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_collections_on_user_id", using: :btree
  end

  create_table "feeds", force: :cascade do |t|
    t.string   "title"
    t.string   "description"
    t.string   "site_url"
    t.string   "favicon_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "feed_url"
    t.index ["feed_url"], name: "index_feeds_on_feed_url", unique: true, using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "session_token",   null: false
    t.string   "password_digest", null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
  end

end
