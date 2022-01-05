# Generated by Django 4.0.1 on 2022-01-05 16:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('movie', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='actor',
            name='movie',
            field=models.ForeignKey(default='Movie', on_delete=django.db.models.deletion.CASCADE, to='movie.movie'),
        ),
        migrations.AlterField(
            model_name='actor',
            name='name',
            field=models.CharField(default='Actor Name', max_length=100),
        ),
        migrations.AlterField(
            model_name='movie',
            name='comment',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='release_date',
            field=models.DateField(verbose_name='release date'),
        ),
        migrations.AlterField(
            model_name='movie',
            name='synopsis',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='movie',
            name='title',
            field=models.CharField(default='Movie Title', max_length=100),
        ),
    ]
