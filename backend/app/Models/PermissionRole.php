<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class PermissionRole extends Model
{
    use HasFactory;

    protected $table = 'permission_role';

    protected $fillable = ['permission_id', 'role_id'];
}
