<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCattleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cattles', function (Blueprint $table) {
            $table->id();
            $table->string('tag')->nullable();
            $table->string('name')->nullable();
            $table->string('origin')->nullable();
            $table->string('breed')->nullable();
            $table->datetime('dateofbirth')->nullable();
            $table->string('gender')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cattles');
    }
}
