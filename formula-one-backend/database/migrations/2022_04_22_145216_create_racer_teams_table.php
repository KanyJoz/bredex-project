<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('racer_teams', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('year_of_foundation');
            $table->integer('won_world_cups_number');
            $table->boolean('have_already_payed')->default(false);
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
        Schema::dropIfExists('racer_teams');
    }
};
