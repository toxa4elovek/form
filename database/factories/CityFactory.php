<?php

use Faker\Factory;
use Faker\Generator as Faker;

$factory->define(\App\Models\City::class, function (Faker $faker) {
    $faker = Factory::create('ru_RU');

    return [
        'name' => $faker->unique()->city
    ];
});
