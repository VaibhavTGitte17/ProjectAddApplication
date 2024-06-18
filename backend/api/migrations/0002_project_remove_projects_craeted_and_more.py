# Generated by Django 5.0.3 on 2024-03-18 17:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField()),
                ('comments', models.CharField(blank=True, max_length=500, null=True)),
                ('status', models.CharField(max_length=100)),
                ('craeted', models.DateTimeField(auto_now_add=True)),
                ('modified', models.DateTimeField(auto_now=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='projects',
            name='craeted',
        ),
        migrations.RemoveField(
            model_name='projects',
            name='modified',
        ),
    ]
